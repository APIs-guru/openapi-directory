import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetArtifactByGlobalIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=globalId" })
  globalId: number;
}


export class GetArtifactByGlobalIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetArtifactByGlobalIdPathParams;
}


export class GetArtifactByGlobalIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
