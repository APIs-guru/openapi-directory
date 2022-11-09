import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DataLakePrincipal
/** 
 * The AWS Lake Formation principal. Supported principals are IAM users or IAM roles.
**/
export class DataLakePrincipal extends SpeakeasyBase {
  @Metadata({ data: "json, name=DataLakePrincipalIdentifier" })
  dataLakePrincipalIdentifier?: string;
}
