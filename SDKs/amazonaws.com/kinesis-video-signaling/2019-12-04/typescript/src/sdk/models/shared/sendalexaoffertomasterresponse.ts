import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SendAlexaOfferToMasterResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Answer" })
  answer?: string;
}
