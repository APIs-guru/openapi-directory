import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CustomMetricParentLink
/** 
 * Parent link for the custom metric. Points to the property to which the custom metric belongs.
**/
export class CustomMetricParentLink extends SpeakeasyBase {
  @Metadata({ data: "json, name=href" })
  href?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


// CustomMetric
/** 
 * JSON template for Analytics Custom Metric.
**/
export class CustomMetric extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountId" })
  accountId?: string;

  @Metadata({ data: "json, name=active" })
  active?: boolean;

  @Metadata({ data: "json, name=created" })
  created?: Date;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=index" })
  index?: number;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=max_value" })
  maxValue?: string;

  @Metadata({ data: "json, name=min_value" })
  minValue?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=parentLink" })
  parentLink?: CustomMetricParentLink;

  @Metadata({ data: "json, name=scope" })
  scope?: string;

  @Metadata({ data: "json, name=selfLink" })
  selfLink?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=updated" })
  updated?: Date;

  @Metadata({ data: "json, name=webPropertyId" })
  webPropertyId?: string;
}
