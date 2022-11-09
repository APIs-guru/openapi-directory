import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ApiCoreDtoTopsTopItem } from "./apicoredtotopstopitem";


export class ApiCoreDtoTopsTop extends SpeakeasyBase {
  @Metadata({ data: "json, name=createdAt" })
  createdAt?: string;

  @Metadata({ data: "json, name=data", elemType: shared.ApiCoreDtoTopsTopItem })
  data?: ApiCoreDtoTopsTopItem[];

  @Metadata({ data: "json, name=key" })
  key?: string;
}
