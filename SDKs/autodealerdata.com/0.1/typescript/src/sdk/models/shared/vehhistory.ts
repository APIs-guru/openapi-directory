import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class VehHistory extends SpeakeasyBase {
  @Metadata({ data: "json, name=dealerName" })
  dealerName: string;

  @Metadata({ data: "json, name=firstSeen" })
  firstSeen: Date;

  @Metadata({ data: "json, name=lastSeen" })
  lastSeen: Date;

  @Metadata({ data: "json, name=miles" })
  miles: number;

  @Metadata({ data: "json, name=new" })
  new: boolean;

  @Metadata({ data: "json, name=price" })
  price: number;

  @Metadata({ data: "json, name=state" })
  state: string;

  @Metadata({ data: "json, name=zip" })
  zip: number;
}
