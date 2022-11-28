import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ItvProfileTokenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=password" })
  password: string;
}
