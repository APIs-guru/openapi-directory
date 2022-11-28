import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BandwidthSnapshotEntity
/** 
 * List Bandwidth Snapshots
**/
export class BandwidthSnapshotEntity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bytes_received" })
  bytesReceived?: number;

  @SpeakeasyMetadata({ data: "json, name=bytes_sent" })
  bytesSent?: number;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=logged_at" })
  loggedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=requests_get" })
  requestsGet?: number;

  @SpeakeasyMetadata({ data: "json, name=requests_other" })
  requestsOther?: number;

  @SpeakeasyMetadata({ data: "json, name=requests_put" })
  requestsPut?: number;

  @SpeakeasyMetadata({ data: "json, name=sync_bytes_received" })
  syncBytesReceived?: number;

  @SpeakeasyMetadata({ data: "json, name=sync_bytes_sent" })
  syncBytesSent?: number;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: Date;
}
