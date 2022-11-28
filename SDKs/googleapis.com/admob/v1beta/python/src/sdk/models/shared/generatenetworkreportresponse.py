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
class GenerateNetworkReportResponse:
    r"""GenerateNetworkReportResponse
    The streaming response for the AdMob Network report where the first response contains the report header, then a stream of row responses, and finally a footer as the last response message. For example: [{ \"header\": { \"dateRange\": { \"startDate\": {\"year\": 2018, \"month\": 9, \"day\": 1}, \"endDate\": {\"year\": 2018, \"month\": 9, \"day\": 1} }, \"localizationSettings\": { \"currencyCode\": \"USD\", \"languageCode\": \"en-US\" } } }, { \"row\": { \"dimensionValues\": { \"DATE\": {\"value\": \"20180918\"}, \"APP\": { \"value\": \"ca-app-pub-8123415297019784~1001342552\", displayLabel: \"My app name!\" } }, \"metricValues\": { \"ESTIMATED_EARNINGS\": {\"microsValue\": 6500000} } } }, { \"footer\": {\"matchingRowCount\": 1} }]
    """
    
    footer: Optional[ReportFooter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('footer') }})
    header: Optional[ReportHeader] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('header') }})
    row: Optional[ReportRow] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('row') }})
    
