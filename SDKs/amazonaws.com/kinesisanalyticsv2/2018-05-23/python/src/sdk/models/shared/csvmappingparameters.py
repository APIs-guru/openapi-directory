from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CsvMappingParameters:
    r"""CsvMappingParameters
    <p>For a SQL-based Kinesis Data Analytics application, provides additional mapping information when the record format uses delimiters, such as CSV. For example, the following sample records use CSV format, where the records use the <i>'\n'</i> as the row delimiter and a comma (\",\") as the column delimiter: </p> <p> <code>\"name1\", \"address1\"</code> </p> <p> <code>\"name2\", \"address2\"</code> </p>
    """
    
    record_column_delimiter: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RecordColumnDelimiter') }})
    record_row_delimiter: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RecordRowDelimiter') }})
    
