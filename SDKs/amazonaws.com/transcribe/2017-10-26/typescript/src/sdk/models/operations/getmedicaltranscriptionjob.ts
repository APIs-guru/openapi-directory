import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetMedicalTranscriptionJobXAmzTargetEnum {
    TranscribeGetMedicalTranscriptionJob = "Transcribe.GetMedicalTranscriptionJob"
}


export class GetMedicalTranscriptionJobHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetMedicalTranscriptionJobXAmzTargetEnum;
}


export class GetMedicalTranscriptionJobRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetMedicalTranscriptionJobHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetMedicalTranscriptionJobRequest;
}


export class GetMedicalTranscriptionJobResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  getMedicalTranscriptionJobResponse?: shared.GetMedicalTranscriptionJobResponse;

  @Metadata()
  internalFailureException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  statusCode: number;
}
