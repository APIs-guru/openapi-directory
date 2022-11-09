import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum StartMedicalTranscriptionJobXAmzTargetEnum {
    TranscribeStartMedicalTranscriptionJob = "Transcribe.StartMedicalTranscriptionJob"
}


export class StartMedicalTranscriptionJobHeaders extends SpeakeasyBase {
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

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: StartMedicalTranscriptionJobXAmzTargetEnum;
}


export class StartMedicalTranscriptionJobRequest extends SpeakeasyBase {
  @Metadata()
  headers: StartMedicalTranscriptionJobHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.StartMedicalTranscriptionJobRequest;
}


export class StartMedicalTranscriptionJobResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalFailureException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  startMedicalTranscriptionJobResponse?: shared.StartMedicalTranscriptionJobResponse;

  @Metadata()
  statusCode: number;
}
