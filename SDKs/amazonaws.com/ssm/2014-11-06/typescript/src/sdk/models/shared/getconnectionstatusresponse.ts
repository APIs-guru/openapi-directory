import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConnectionStatusEnum } from "./connectionstatusenum";


export class GetConnectionStatusResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Status" })
  status?: ConnectionStatusEnum;

  @Metadata({ data: "json, name=Target" })
  target?: string;
}
