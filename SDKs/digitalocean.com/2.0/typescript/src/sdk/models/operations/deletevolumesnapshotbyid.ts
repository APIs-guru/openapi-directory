import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteVolumeSnapshotByIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=snapshot_id" })
  snapshotId: any;
}


export class DeleteVolumeSnapshotByIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteVolumeSnapshotByIdPathParams;
}


export class DeleteVolumeSnapshotById401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class DeleteVolumeSnapshotByIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  deleteVolumeSnapshotById401ApplicationJsonObject?: DeleteVolumeSnapshotById401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
