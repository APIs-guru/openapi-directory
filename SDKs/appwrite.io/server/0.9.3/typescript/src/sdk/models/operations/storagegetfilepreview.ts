import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class StorageGetFilePreviewPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=fileId" })
  fileId: string;
}


export class StorageGetFilePreviewQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=background" })
  background?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=borderColor" })
  borderColor?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=borderRadius" })
  borderRadius?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=borderWidth" })
  borderWidth?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=gravity" })
  gravity?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=height" })
  height?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=opacity" })
  opacity?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=output" })
  output?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quality" })
  quality?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=rotation" })
  rotation?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=width" })
  width?: number;
}


export class StorageGetFilePreviewSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  jwt: shared.SchemeJwt;

  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  key: shared.SchemeKey;

  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  project: shared.SchemeProject;
}


export class StorageGetFilePreviewRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: StorageGetFilePreviewPathParams;

  @Metadata()
  queryParams: StorageGetFilePreviewQueryParams;

  @Metadata()
  security: StorageGetFilePreviewSecurity;
}


export class StorageGetFilePreviewResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
