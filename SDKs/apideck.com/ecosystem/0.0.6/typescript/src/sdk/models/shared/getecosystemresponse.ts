import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Ecosystem } from "./ecosystem";



export class GetEcosystemResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data: Ecosystem;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: string;

  @SpeakeasyMetadata({ data: "json, name=status_code" })
  statusCode: number;
}
