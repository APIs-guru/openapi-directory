import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConnectionStatusEnum } from "./connectionstatusenum";



export class GetConnectionStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: ConnectionStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=Target" })
  target?: string;
}
