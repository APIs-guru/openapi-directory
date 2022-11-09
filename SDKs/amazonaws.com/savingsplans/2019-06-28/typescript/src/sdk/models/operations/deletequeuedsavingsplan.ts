import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteQueuedSavingsPlanHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


export class DeleteQueuedSavingsPlanRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=savingsPlanId" })
  savingsPlanId: string;
}


export class DeleteQueuedSavingsPlanRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeleteQueuedSavingsPlanHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: DeleteQueuedSavingsPlanRequestBody;
}


export class DeleteQueuedSavingsPlanResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deleteQueuedSavingsPlanResponse?: Map<string, any>;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  serviceQuotaExceededException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: any;
}
