import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApiCoreDtoTopsTopItem } from "./apicoredtotopstopitem";



export class ApiCoreDtoTopsTop extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: string;

  @SpeakeasyMetadata({ data: "json, name=data", elemType: ApiCoreDtoTopsTopItem })
  data?: ApiCoreDtoTopsTopItem[];

  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;
}
