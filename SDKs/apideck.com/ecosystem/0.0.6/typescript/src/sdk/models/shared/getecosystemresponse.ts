import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Ecosystem } from "./ecosystem";


export class GetEcosystemResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data: Ecosystem;

  @Metadata({ data: "json, name=status" })
  status: string;

  @Metadata({ data: "json, name=status_code" })
  statusCode: number;
}
