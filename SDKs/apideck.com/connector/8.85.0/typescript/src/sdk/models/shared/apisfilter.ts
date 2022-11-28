import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApiStatusEnum } from "./apistatusenum";



export class ApisFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, name=status" })
  status?: ApiStatusEnum;
}
