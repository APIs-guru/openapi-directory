import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ServiceMetricsTask } from "./servicemetricstask";


export class CustomerServiceMetricTaskCollection extends SpeakeasyBase {
  @Metadata({ data: "json, name=href" })
  href?: string;

  @Metadata({ data: "json, name=limit" })
  limit?: number;

  @Metadata({ data: "json, name=next" })
  next?: string;

  @Metadata({ data: "json, name=offset" })
  offset?: number;

  @Metadata({ data: "json, name=prev" })
  prev?: string;

  @Metadata({ data: "json, name=tasks", elemType: shared.ServiceMetricsTask })
  tasks?: ServiceMetricsTask[];

  @Metadata({ data: "json, name=total" })
  total?: number;
}
