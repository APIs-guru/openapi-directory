import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class BlockedNumber extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=phoneNumber" })
  phoneNumber: string;
}
