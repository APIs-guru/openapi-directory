import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum StartAssociationsOnceXAmzTargetEnum {
    AmazonSsmStartAssociationsOnce = "AmazonSSM.StartAssociationsOnce"
}


export class StartAssociationsOnceHeaders extends SpeakeasyBase {
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
  xAmzTarget: StartAssociationsOnceXAmzTargetEnum;
}


export class StartAssociationsOnceRequest extends SpeakeasyBase {
  @Metadata()
  headers: StartAssociationsOnceHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.StartAssociationsOnceRequest;
}


export class StartAssociationsOnceResponse extends SpeakeasyBase {
  @Metadata()
  associationDoesNotExist?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  invalidAssociation?: any;

  @Metadata()
  startAssociationsOnceResult?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
