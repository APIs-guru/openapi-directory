import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Resource
/** 
 *  Information about an instance of an AWS resource associated with a project. 
**/
export class Resource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=attributes" })
  attributes?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=feature" })
  feature?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
