import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum StartAssociationsOnceXAmzTargetEnum {
    AmazonSsmStartAssociationsOnce = "AmazonSSM.StartAssociationsOnce"
}


export class StartAssociationsOnceHeaders extends SpeakeasyBase {
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
  xAmzTarget: StartAssociationsOnceXAmzTargetEnum;
}


export class StartAssociationsOnceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: StartAssociationsOnceHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.StartAssociationsOnceRequest;
}


export class StartAssociationsOnceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  associationDoesNotExist?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  invalidAssociation?: any;

  @SpeakeasyMetadata()
  startAssociationsOnceResult?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
