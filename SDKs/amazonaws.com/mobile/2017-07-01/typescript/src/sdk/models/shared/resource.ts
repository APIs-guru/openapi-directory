import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Resource
/** 
 *  Information about an instance of an AWS resource associated with a project. 
**/
export class Resource extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=attributes" })
  attributes?: Map<string, string>;

  @Metadata({ data: "json, name=feature" })
  feature?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
