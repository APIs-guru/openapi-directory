import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Listing extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=askPrice" })
  askPrice: number;

  @SpeakeasyMetadata({ data: "json, name=brandName" })
  brandName: string;

  @SpeakeasyMetadata({ data: "json, name=color" })
  color?: string;

  @SpeakeasyMetadata({ data: "json, name=dealerID" })
  dealerId: number;

  @SpeakeasyMetadata({ data: "json, name=firstSeen" })
  firstSeen: Date;

  @SpeakeasyMetadata({ data: "json, name=interiorColor" })
  interiorColor?: string;

  @SpeakeasyMetadata({ data: "json, name=isNew" })
  isNew: boolean;

  @SpeakeasyMetadata({ data: "json, name=lastSeen" })
  lastSeen: Date;

  @SpeakeasyMetadata({ data: "json, name=mileage" })
  mileage?: number;

  @SpeakeasyMetadata({ data: "json, name=modelName" })
  modelName: string;

  @SpeakeasyMetadata({ data: "json, name=msrp" })
  msrp: number;

  @SpeakeasyMetadata({ data: "json, name=vin" })
  vin: string;

  @SpeakeasyMetadata({ data: "json, name=vinDecode" })
  vinDecode?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=year" })
  year: number;
}
