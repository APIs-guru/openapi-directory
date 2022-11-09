import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { KnownGender } from "./knowngender";


export class GetCelebrityInfoResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=KnownGender" })
  knownGender?: KnownGender;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Urls" })
  urls?: string[];
}
