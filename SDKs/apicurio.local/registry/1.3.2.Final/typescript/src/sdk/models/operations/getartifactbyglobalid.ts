import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetArtifactByGlobalIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=globalId" })
  globalId: number;
}


export class GetArtifactByGlobalIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetArtifactByGlobalIdPathParams;
}


export class GetArtifactByGlobalIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
