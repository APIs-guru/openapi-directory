import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BandwidthSnapshotEntity
/** 
 * List Bandwidth Snapshots
**/
export class BandwidthSnapshotEntity extends SpeakeasyBase {
  @Metadata({ data: "json, name=bytes_received" })
  bytesReceived?: number;

  @Metadata({ data: "json, name=bytes_sent" })
  bytesSent?: number;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=logged_at" })
  loggedAt?: Date;

  @Metadata({ data: "json, name=requests_get" })
  requestsGet?: number;

  @Metadata({ data: "json, name=requests_other" })
  requestsOther?: number;

  @Metadata({ data: "json, name=requests_put" })
  requestsPut?: number;

  @Metadata({ data: "json, name=sync_bytes_received" })
  syncBytesReceived?: number;

  @Metadata({ data: "json, name=sync_bytes_sent" })
  syncBytesSent?: number;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: Date;
}
