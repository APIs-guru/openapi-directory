from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GenerateMediationReportResponse:
    r"""GenerateMediationReportResponse
    The streaming response for the AdMob mediation report where the first response contains the report header, then a stream of row responses, and finally a footer as the last response message. For example: [{ \"header\": { \"date_range\": { \"start_date\": {\"year\": 2018, \"month\": 9, \"day\": 1}, \"end_date\": {\"year\": 2018, \"month\": 9, \"day\": 1} }, \"localization_settings\": { \"currency_code\": \"USD\", \"language_code\": \"en-US\" } } }, { \"row\": { \"dimension_values\": { \"DATE\": {\"value\": \"20180918\"}, \"APP\": { \"value\": \"ca-app-pub-8123415297019784~1001342552\", \"display_label\": \"My app name!\" } }, \"metric_values\": { \"ESTIMATED_EARNINGS\": {\"decimal_value\": \"1324746\"} } } }, { \"footer\": {\"matching_row_count\": 1} }]
    """
    
    footer: Optional[ReportFooter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('footer') }})
    header: Optional[ReportHeader] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('header') }})
    row: Optional[ReportRow] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('row') }})
    
