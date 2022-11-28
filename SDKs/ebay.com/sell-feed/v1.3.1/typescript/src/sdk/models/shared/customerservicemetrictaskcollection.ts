import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ServiceMetricsTask } from "./servicemetricstask";



export class CustomerServiceMetricTaskCollection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;

  @SpeakeasyMetadata({ data: "json, name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;

  @SpeakeasyMetadata({ data: "json, name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "json, name=prev" })
  prev?: string;

  @SpeakeasyMetadata({ data: "json, name=tasks", elemType: ServiceMetricsTask })
  tasks?: ServiceMetricsTask[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;
}
