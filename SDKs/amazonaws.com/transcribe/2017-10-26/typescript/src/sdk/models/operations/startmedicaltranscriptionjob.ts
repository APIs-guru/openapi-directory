import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum StartMedicalTranscriptionJobXAmzTargetEnum {
    TranscribeStartMedicalTranscriptionJob = "Transcribe.StartMedicalTranscriptionJob"
}


export class StartMedicalTranscriptionJobHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: StartMedicalTranscriptionJobXAmzTargetEnum;
}


export class StartMedicalTranscriptionJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: StartMedicalTranscriptionJobHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.StartMedicalTranscriptionJobRequest;
}


export class StartMedicalTranscriptionJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  conflictException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalFailureException?: any;

  @SpeakeasyMetadata()
  limitExceededException?: any;

  @SpeakeasyMetadata()
  startMedicalTranscriptionJobResponse?: shared.StartMedicalTranscriptionJobResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
