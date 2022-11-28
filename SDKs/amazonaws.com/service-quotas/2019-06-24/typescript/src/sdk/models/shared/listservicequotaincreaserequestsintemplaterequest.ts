import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListServiceQuotaIncreaseRequestsInTemplateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AwsRegion" })
  awsRegion?: string;

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=ServiceCode" })
  serviceCode?: string;
}
