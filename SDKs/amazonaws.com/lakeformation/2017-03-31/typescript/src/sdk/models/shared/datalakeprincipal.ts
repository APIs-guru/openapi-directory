import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DataLakePrincipal
/** 
 * The AWS Lake Formation principal. Supported principals are IAM users or IAM roles.
**/
export class DataLakePrincipal extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DataLakePrincipalIdentifier" })
  dataLakePrincipalIdentifier?: string;
}
