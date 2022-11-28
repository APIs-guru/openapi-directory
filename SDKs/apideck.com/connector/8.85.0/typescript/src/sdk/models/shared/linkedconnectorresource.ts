import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceStatusEnum } from "./resourcestatusenum";



export class LinkedConnectorResource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=downstream_id" })
  downstreamId?: string;

  @SpeakeasyMetadata({ data: "json, name=downstream_name" })
  downstreamName?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ResourceStatusEnum;
}
