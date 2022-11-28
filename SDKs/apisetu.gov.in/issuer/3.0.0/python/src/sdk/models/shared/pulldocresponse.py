from dataclasses import dataclass, field



@dataclass
class PullDocResponseDocDetails:
    r"""PullDocResponseDocDetails
    Issuer can add meta content specific to document here.
    """
    
    data_content: str = field()
    doc_content: str = field()
    

@dataclass
class PullDocResponseResponseStatus:
    status: str = field()
    ts: str = field()
    txn: str = field()
    

@dataclass
class PullDocResponse:
    doc_details: PullDocResponseDocDetails = field()
    response_status: PullDocResponseResponseStatus = field()
    
