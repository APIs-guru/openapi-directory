import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ItvProfileTokenRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=password" })
  password: string;
}
