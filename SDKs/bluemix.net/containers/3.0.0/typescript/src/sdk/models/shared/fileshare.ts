import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Fileshare extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=capacity" })
  capacity?: number;

  @SpeakeasyMetadata({ data: "json, name=created_date" })
  createdDate?: string;

  @SpeakeasyMetadata({ data: "json, name=fsName" })
  fsName?: string;

  @SpeakeasyMetadata({ data: "json, name=hostPath" })
  hostPath?: string;

  @SpeakeasyMetadata({ data: "json, name=iops" })
  iops?: number;

  @SpeakeasyMetadata({ data: "json, name=iopsTotal" })
  iopsTotal?: number;

  @SpeakeasyMetadata({ data: "json, name=orderId" })
  orderId?: string;

  @SpeakeasyMetadata({ data: "json, name=provider" })
  provider?: string;

  @SpeakeasyMetadata({ data: "json, name=spaceGuid" })
  spaceGuid?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: string;

  @SpeakeasyMetadata({ data: "json, name=updated_date" })
  updatedDate?: string;
}
