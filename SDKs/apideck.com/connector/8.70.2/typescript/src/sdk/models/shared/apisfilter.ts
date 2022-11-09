import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ApiStatusEnum } from "./apistatusenum";


export class ApisFilter extends SpeakeasyBase {
  @Metadata({ data: "queryParam, name=status" })
  status?: ApiStatusEnum;
}
