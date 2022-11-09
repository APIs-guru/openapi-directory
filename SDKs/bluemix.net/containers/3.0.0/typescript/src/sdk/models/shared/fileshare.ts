import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Fileshare extends SpeakeasyBase {
  @Metadata({ data: "json, name=capacity" })
  capacity?: number;

  @Metadata({ data: "json, name=created_date" })
  createdDate?: string;

  @Metadata({ data: "json, name=fsName" })
  fsName?: string;

  @Metadata({ data: "json, name=hostPath" })
  hostPath?: string;

  @Metadata({ data: "json, name=iops" })
  iops?: number;

  @Metadata({ data: "json, name=iopsTotal" })
  iopsTotal?: number;

  @Metadata({ data: "json, name=orderId" })
  orderId?: string;

  @Metadata({ data: "json, name=provider" })
  provider?: string;

  @Metadata({ data: "json, name=spaceGuid" })
  spaceGuid?: string;

  @Metadata({ data: "json, name=state" })
  state?: string;

  @Metadata({ data: "json, name=updated_date" })
  updatedDate?: string;
}
