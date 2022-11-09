import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DescribeSavingsPlansHeaders extends SpeakeasyBase {
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


export class DescribeSavingsPlansRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=filters", elemType: shared.SavingsPlanFilter })
  filters?: shared.SavingsPlanFilter[];

  @Metadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=savingsPlanArns" })
  savingsPlanArns?: string[];

  @Metadata({ data: "json, name=savingsPlanIds" })
  savingsPlanIds?: string[];

  @Metadata({ data: "json, name=states" })
  states?: shared.SavingsPlanStateEnum[];
}


export class DescribeSavingsPlansRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeSavingsPlansHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: DescribeSavingsPlansRequestBody;
}


export class DescribeSavingsPlansResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeSavingsPlansResponse?: shared.DescribeSavingsPlansResponse;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: any;
}
