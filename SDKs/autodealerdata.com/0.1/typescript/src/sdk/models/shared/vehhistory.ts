import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class VehHistory extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dealerName" })
  dealerName: string;

  @SpeakeasyMetadata({ data: "json, name=firstSeen" })
  firstSeen: Date;

  @SpeakeasyMetadata({ data: "json, name=lastSeen" })
  lastSeen: Date;

  @SpeakeasyMetadata({ data: "json, name=miles" })
  miles: number;

  @SpeakeasyMetadata({ data: "json, name=new" })
  new: boolean;

  @SpeakeasyMetadata({ data: "json, name=price" })
  price: number;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state: string;

  @SpeakeasyMetadata({ data: "json, name=zip" })
  zip: number;
}
