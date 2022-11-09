import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Listing extends SpeakeasyBase {
  @Metadata({ data: "json, name=askPrice" })
  askPrice: number;

  @Metadata({ data: "json, name=brandName" })
  brandName: string;

  @Metadata({ data: "json, name=color" })
  color?: string;

  @Metadata({ data: "json, name=dealerID" })
  dealerId: number;

  @Metadata({ data: "json, name=firstSeen" })
  firstSeen: Date;

  @Metadata({ data: "json, name=interiorColor" })
  interiorColor?: string;

  @Metadata({ data: "json, name=isNew" })
  isNew: boolean;

  @Metadata({ data: "json, name=lastSeen" })
  lastSeen: Date;

  @Metadata({ data: "json, name=mileage" })
  mileage?: number;

  @Metadata({ data: "json, name=modelName" })
  modelName: string;

  @Metadata({ data: "json, name=msrp" })
  msrp: number;

  @Metadata({ data: "json, name=vin" })
  vin: string;

  @Metadata({ data: "json, name=vinDecode" })
  vinDecode?: Map<string, any>;

  @Metadata({ data: "json, name=year" })
  year: number;
}
