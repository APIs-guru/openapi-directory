import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetCelebrityInfoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Id" })
  id: string;
}
