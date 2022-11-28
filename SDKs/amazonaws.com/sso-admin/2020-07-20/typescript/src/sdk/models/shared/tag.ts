import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Tag
/** 
 * A set of key-value pairs that are used to manage the resource. Tags can only be applied to permission sets and cannot be applied to corresponding roles that Amazon Web Services SSO creates in Amazon Web Services accounts.
**/
export class Tag extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value?: string;
}
