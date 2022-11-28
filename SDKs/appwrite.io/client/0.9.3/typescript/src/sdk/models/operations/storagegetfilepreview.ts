import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class StorageGetFilePreviewPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=fileId" })
  fileId: string;
}


export class StorageGetFilePreviewQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=background" })
  background?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=borderColor" })
  borderColor?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=borderRadius" })
  borderRadius?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=borderWidth" })
  borderWidth?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=gravity" })
  gravity?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=height" })
  height?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opacity" })
  opacity?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=output" })
  output?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quality" })
  quality?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rotation" })
  rotation?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=width" })
  width?: number;
}


export class StorageGetFilePreviewSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  jwt: shared.SchemeJwt;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  project: shared.SchemeProject;
}


export class StorageGetFilePreviewRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: StorageGetFilePreviewPathParams;

  @SpeakeasyMetadata()
  queryParams: StorageGetFilePreviewQueryParams;

  @SpeakeasyMetadata()
  security: StorageGetFilePreviewSecurity;
}


export class StorageGetFilePreviewResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
