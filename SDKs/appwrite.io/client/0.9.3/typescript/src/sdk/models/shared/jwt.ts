import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Jwt
/** 
 * JWT
**/
export class Jwt extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=jwt" })
  jwt: string;
}
