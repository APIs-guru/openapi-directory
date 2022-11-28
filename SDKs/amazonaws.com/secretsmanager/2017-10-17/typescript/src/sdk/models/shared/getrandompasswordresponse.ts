import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetRandomPasswordResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=RandomPassword" })
  randomPassword?: string;
}
