import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DescribeSavingsPlansHeaders extends SpeakeasyBase {
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
}


export class DescribeSavingsPlansRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filters", elemType: shared.SavingsPlanFilter })
  filters?: shared.SavingsPlanFilter[];

  @SpeakeasyMetadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=savingsPlanArns" })
  savingsPlanArns?: string[];

  @SpeakeasyMetadata({ data: "json, name=savingsPlanIds" })
  savingsPlanIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=states" })
  states?: shared.SavingsPlanStateEnum[];
}


export class DescribeSavingsPlansRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: DescribeSavingsPlansHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: DescribeSavingsPlansRequestBody;
}


export class DescribeSavingsPlansResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  describeSavingsPlansResponse?: shared.DescribeSavingsPlansResponse;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  validationException?: any;
}
