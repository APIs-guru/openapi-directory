import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { KnownGender } from "./knowngender";



export class GetCelebrityInfoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=KnownGender" })
  knownGender?: KnownGender;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Urls" })
  urls?: string[];
}
