import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateVolumeSnapshotPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=volume_id" })
  volumeId: string;
}


export class CreateVolumeSnapshotRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateVolumeSnapshotPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: any;
}


export class CreateVolumeSnapshot401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class CreateVolumeSnapshotResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  createVolumeSnapshot201ApplicationJsonAny?: any;

  @Metadata()
  createVolumeSnapshot401ApplicationJsonObject?: CreateVolumeSnapshot401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
